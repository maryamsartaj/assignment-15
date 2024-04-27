var guest_list = ["maryam", "ansar", "sana", "sadia", "nazish"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear $[guest_list[i]]\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n");
}
var not_coming = "maryam";
var new_guest = "hina";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear $[guest_list[i]]\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n");
}
console.log("ms ".concat(not_coming, ", is not coming for dinner tomorrow."));
