import {create} from 'ipfs-http-client';
import UpdateData from './firebase';

export default function IPFS(){
    
    const ipfs = create({
        host:"ipfs.infura.io",
        port:5001,
        protocol:'https'
      });
    const  AddData= (data)=>{
        const results=  ipfs.add(data).then((result)=>{
            return result.path;
        });
        results.then((result)=>{
            UpdateData(result);
        //     fs.writeFile('hash.json',JSON.stringify({hash:result}),(err)=>{
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             console.log(result, ' has been successfully stored');
        //         }
        //     })
        });
        return results
    }
    return [ipfs,AddData];
}