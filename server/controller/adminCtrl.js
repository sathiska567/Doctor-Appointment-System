const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");

// All Doctor Details
const getAllDoctorsController = async (req, res) => {
  try {

    const doctors = await doctorModel.find({});

    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};

//Doctor Account Status
const changeAccountStatusController = async(req,res)=>{
     
        try {
 
          // console.log(req.body);

         const {doctorId , status} = req.body

         console.log(doctorId);

         const doctor = await doctorModel.findByIdAndUpdate(doctorId , {status})
         
         console.log(doctor);

        //  const user = await doctorModel.findOne({_id:doctor.id})  
        //  console.log(user);
        //  const notification = user.notification

        //  notification.push({

        //         type : 'doctor-account-updated',
        //         message : "Your account updated",
        //         onClickPath : '/notification'

        //  })


        //  user.isDoctor === 'approved' ? true : false
        //  await user.save()

         res.status(201).send({
                success : true,
                message : 'Account Status Updated',
                data : doctor

         })

                
        } catch (error) {

                console.log('Error occure inside the changeAccountStatusController');
                res.status(400).send({
                   success : false,
                   message : 'Error occure',
                   error
                })
                
        }


}

// Delete admin controller
const deleteRequestController = async(req,res)=>{
   const {userId} = req.body;         //must want to same req.body passing name and here value getting name.
   console.log(userId);
   try {

    const deletedUser = await doctorModel.deleteOne({_id : userId})
     
     res.status(200).send({
       message : "Delete successfully",       
     })    
   }    
   catch (error) {
    res.status(400).send({
      message : "Delete Controller have error",
      error
    })
   }
}


module.exports = {
  getAllDoctorsController,
  changeAccountStatusController,
  deleteRequestController,
};