try {
    console.log(a+b)
    throw new Error();
} catch (err) { //name error whatever you like, err or error is okay.
    console.log(err)
    console.log("There was some kind of a problem.")
}
