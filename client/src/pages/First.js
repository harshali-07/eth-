import {useState,useEffect} from 'react'
import Web3 from 'web3';

// import Contract from '../contracts/Parent.json'
// const Contractaddress = '0xD77824a92B9fEd5a95E9C4C94B826950112338fd'
// const abi = Contract.abi
import {abi,address} from '../contracts/contractabi'

const Task = () => {
    const [web3,setWeb3] = useState("")
    const [name,setName] = useState("")
  const [symbol,setSymbol] = useState("")
  const [supply, setSupply] = useState("")
  const [decimals,setDecimals] = useState("18")
  const getTokenAddress = async()=>{
    const tokenAddress = await contract.methods.childContract().call({from :'0x4B08965e8fb0f192EE8067DEbF9e9a566EE08Cc4'})
    console.log(tokenAddress)
  }
        
  const createToken = async (e) => {
          e.preventDefault()
       {
              console.log(name,symbol,Number(supply),Number(decimals))
              console.log(contract)
              await contract.methods.createChild(name,symbol,Number(supply),Number(decimals)).call()
              const tokenAddress = await contract.methods.childContract().call()
              console.log(tokenAddress)
          }
        }    
    const [account,setAccount] = useState("")
    const [contract,setContract] = useState()


    useEffect(() => {
        async function load() {
          const web3 = new Web3(Web3.givenProvider ||'https://ropsten.infura.io/v3/315f46cdcf9c4d9193504fa5c771428a');
        //   const accounts = await web3.eth.requestAccounts();
        //   setAccount(accounts[0]);
        const newContract = new web3.eth.Contract(abi, address);
      setContract(newContract);
      console.log("newContract",newContract)
        setWeb3(web3)
     }
     
        load(); 
       }, [account]);
        const btnhandler = () => {

            if (window.ethereum) {

                    window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(res=>{
                    console.log('response',res)
                    setAccount(res[0]) 
                })
            }else {

                alert("install metamask extension!!");
  
              window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')
  
              }
                }
        return (
            <>
            <h1>Create Token</h1>
            <h3>
                {account===""?"connet metamask":account}
                </h3>
{account===""?
<>
                <h5> Connect metamask</h5>
                <button onClick={btnhandler}>Connect</button>
                </>
            :<>
            <form>
                <input type="text" placeholder='name' value={name} onChange={e=>setName(e.target.value)}/>
                <input type="text" placeholder='symbol' value={symbol} onChange={e=>setSymbol(e.target.value)}/>
                <input type="number" placeholder='total Supply' value={supply} onChange={e=>setSupply(e.target.value)}/>
                <input type="number" placeholder='decimals' value={decimals} onChange={e=>setDecimals(e.target.value)}/> <br/> <br/>
                <button onClick={createToken} type='submit'>Create Token</button>
            </form> <br/>
                <button onClick={getTokenAddress}>view Token Address
                </button>
            </>
}
</>

        );
    
    }
    
    export default Task;
    
    
    
    

