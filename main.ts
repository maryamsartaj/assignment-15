let guest_list: string[] = [`maryam`,`ansar`,`sana`,`sadia`,`nazish`];
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear $[guest_list[i]]\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n`);

}

let not_coming: string = `maryam`;
let new_guest: string = `hina`;
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear $[guest_list[i]]\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n`);
}

console.log(`ms ${not_coming}, is not coming for dinner tomorrow.`)