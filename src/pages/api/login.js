import { accountsInfo } from "./accounts"

export default function handler(req, res) {
    const { email, password } = req.body

    const account = accountsInfo.find(acc => acc.username == email && acc.password == password);
    
    if (account) {
        res.status(200).json({message:"Login Successful", user: email})
    }
    else {
        res.status(401).json({message:"Login Failed", user: email})
    }

}