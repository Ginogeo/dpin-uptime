import { prismaClient } from "db/client";
const userID="5";
async function seed(){
    const user=await prismaClient.user.create({
        data:{
            email:"test@test.com",
            id:userID,
            
        }
    })
    const website=await prismaClient.website.create({
        data:{
            
            url:"https://www.google.com",
            userId:userID,
            
            
        }
    })
    const validator=await prismaClient.validator.create({
        data:{
            
            publicKey:"1234567890",
            location:"US",
            ip:"127.0.0.1",
            
        }
    })
    await prismaClient.websiteTick.create({
        data:{
            websiteId:website.id,
            status:"Good",
            latency:100,
            
            validatorId:validator.id,
            createdAt:new Date()
        }
    })
    await prismaClient.websiteTick.create({
        data:{
            websiteId:website.id,
            status:"Good",
            latency:100,
            
            validatorId:validator.id,
            createdAt:new Date(Date.now() - 1000 * 60 *  10)
        }
    })
    await prismaClient.websiteTick.create({
        data:{
            websiteId:website.id,
            status:"Bad",
            latency:100,
            
            validatorId:validator.id,
            createdAt:new Date(Date.now() - 1000 * 60 *  1)
        }
    })



}
seed();