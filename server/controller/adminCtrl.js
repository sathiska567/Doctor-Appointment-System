const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModel");

// const getAllUsersController = async (req, res) => {
//   try {
//     const users = await userModel.find({});
//     res.status(200).send({
//       success: true,
//       message: "users data list",
//       data: users,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "erorr while fetching users",
//       error,
//     });
//   }
// };

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
 
          console.log(req.body);

         const {doctorId , status} = req.body

         console.log(doctorId);

         const doctor = await doctorModel.findByIdAndUpdate(doctorId , {status})
         
         console.log(doctor);

         const user = await userModel.findOne({_id:doctor.id})  
         
         const notification = user.notification

         notification.push({

                type : 'doctor-account-updated',
                message : `Your Doctor account has ${status}`,
                onClickPath : '/notification'

         })


         user.isDoctor === 'approved' ? true : false
         await user.save()

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


module.exports = {
  getAllDoctorsController,
  changeAccountStatusController,
};