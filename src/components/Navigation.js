import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        
        <nav style={{ position: 'relative' ,  }}>
            <button
                type="button"
                className='nav__connect'
                style={{ position: 'absolute', top: '-3px', right: '10px' ,height:'50px',marginTop:'3px',fontSize:'auto' }} // Adjust the top and right values as needed
                onClick={connectHandler}
            >
                {account ? (
                    account.slice(0, 6) + '...' + account.slice(38, 42)
                ) : (
                    'Connect'
                )}
            </button>

            <ul className='nav__links' 
            style={{ marginTop:'0px', height:'50px' , fontSize:'2rem', gap:'4.8rem'}} >
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
