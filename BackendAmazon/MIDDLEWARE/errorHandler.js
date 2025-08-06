const errorHandler = ( error, req,res) =>{
        res.status(500).json({msg: "something went wrong please try again later"})
}



module.exports = errorHandler