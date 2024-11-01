import { NextResponse } from "next/server";

import { pipeline } from "stream";
import {promisify} from 'util';

let saveKaro = promisify(pipeline);

import fs from 'fs';

// fs.writeFileSync('hello-wali.txt', "teh asd akdjkl jalsdkj kadjkasdjkasd")

// fs = file-system

let users = [];

export async function DELETE(req) {

    let meraData = await req.json();

    users.splice(meraData.index, 1);
    
    return NextResponse.json({success:true});

}

export async function GET(req) {

    return NextResponse.json(users);

}

export async function POST(req) {

    // let meraData = await req.json();
    let meraData = await req.formData();

    console.log("data agya");
    console.log(meraData.get('email'));
    console.log(meraData.get('password'));
    // console.log();

    let meriFile = meraData.get('picture');
//   console.log(meriFile.)

    saveKaro(meriFile.stream(), fs.createWriteStream('public/my-uploads/some.jpg') );

    // users.push(meraData);

    return NextResponse.json({ abc: 100, });

}