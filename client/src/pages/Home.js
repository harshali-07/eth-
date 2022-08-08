import { useNavigate} from 'react-router-dom';
import './home.css'
const Home = () => {
    let navigate = useNavigate();
    const btnhandler = () => {
    navigate('/home/first')
    }
    return(
<div className='main'>
<h2 className='heading'>Token Generator</h2>
<h3>Create your token</h3>

<h5 className='line'>Choose your preferred Network for generating Standard ERC20 Token</h5>

<div className='btncontainer'>
<button  onClick={btnhandler} className="btn my-3 p-3 text-uppercase ethereum-gradient btn-dark btn-lg btn-block" target="_self"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="3 0 32 25" class="cryptoicon--eth"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="#fff" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"></path><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></path><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"></path><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"></path></g></g></svg></svg>
            Ethereum</button>
<button  onClick={btnhandler} className="btn my-3 p-3 text-uppercase polygon-gradient btn-dark btn-lg btn-block" target="_self"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 40 25" class="cryptoicon--matic"><path fill-rule="evenodd" fill="#fff" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"></path></svg>
            Polygon</button>
<button onClick={btnhandler} className="btn my-3 p-3 text-uppercase bsc-gradient btn-dark btn-lg btn-block" target="_self"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 25" class="cryptoicon--bnb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="#fff" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"></path></svg></svg>
            BSC</button> <br></br> <br></br>
</div>
</div>
    );
}
export default Home; 
