import Web3 from "web3";
import Marketplace from "./contracts/Marketplace.json";

function App() {
    const loadBlockchainData = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
        const accounts = await web3.eth.requestAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Marketplace.networks[networkId];
        const contract = new web3.eth.Contract(Marketplace.abi, deployedNetwork.address);
        console.log("Contract:", contract);
    };

    return (
        <div className="App">
            <button onClick={loadBlockchainData}>Connect</button>
        </div>
    );
}

export default App;