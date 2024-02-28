import styled from "styled-components";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// Components
import Navigation from './components/Navigation';
import Section from './components/Section';
import Product from './components/Product';
// ABIs
import Ecom from './abis/Ecom.json';
// Config
import config from './config.json';

function Products (){
  const [provider, setProvider] = useState(null)
  const [ecom, setEcom] = useState(null)

  const [account, setAccount] = useState(null)

  const [electronics, setElectronics] = useState(null)
  const [clothing, setClothing] = useState(null)
  const [toys, setToys] = useState(null)

  const [item, setItem] = useState({})
  const [toggle, setToggle] = useState(false)

  const togglePop = (item) => {
    setItem(item)
    toggle ? setToggle(false) : setToggle(true)
  }

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const ecom = new ethers.Contract(config[network.chainId].ecom.address, Ecom, provider)
    setEcom(ecom)

    const items = []

    for (var i = 0; i < 50; i++) {
      const item = await ecom.items(i + 1)
      items.push(item)
    }

    const electronics = items.filter((item) => item.category === 'electronics')
    const clothing = items.filter((item) => item.category === 'clothing')
    const toys = items.filter((item) => item.category === 'toys')

    setElectronics(electronics)
    setClothing(clothing)
    setToys(toys)
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])
  return (
<div>
<Navigation account={account} setAccount={setAccount} />
      {electronics && clothing && toys && (
        <>
          <Section title={"Clothing & Jewelry"} items={clothing} togglePop={togglePop} />
          <Section title={"Electronics & Gadgets"} items={electronics} togglePop={togglePop} />
          <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop} />
        </>
      )}

      {toggle && (
        <Product item={item} provider={provider} account={account} ecom={ecom} togglePop={togglePop} />
      )}

    </div>
 );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;