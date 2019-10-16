const express = require("express");
const app = express();
const mysql=require("mysql");
const bodyParser = require("body-parser");
const cors=require('cors');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


const connection = mysql.createConnection({
    host:"localhost",
    user:"hack",
    password:"vimarsh",
    database:"hack"
})


app.post("/read",(req,res)=>{
    var Id = req.body.Id;
    var queryy = 'SELECT shirt,pant,tshirt,short,bedsheet,other from data WHERE  Id="'+Id+'"';
    connection.query(queryy,(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                status:400,
                success:false
            })
        }
        res.json(result);

    })
})


app.post("/uread",(req,res)=>{
    var Name= req.body.Name;
    var queryy = 'SELECT Id,Name,Username,Address,Contact from regis WHERE  Name="'+Name+'"';
    connection.query(queryy,(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                status:400,
                success:false
            })
        }
        res.json(result);

    })
})
app.post("/delete",(req,res)=>{
    var Id = req.body.Id;
    var queryy = "DELETE from data WHERE Id =?";
    connection.query(queryy,[Id],(err,rows,fields)=>{
        if(!err)
            res.send('Delete success.');
            else{
                console.log(err);
                res.end();
            }
            
        
        res.json(rows);

    })
})

app.post("/update",(req,res)=>{
    var Id = req.body.Id;
    var shirt = req.body.shirt;
    var pant = req.body.pant;
    var tshirt = req.body.tshirt;
    var short = req.body.short;
    var bedsheet = req.body.bedsheet;
    var other = req.body.other;
    var queryy="UPDATE data set shirt=(?), pant=(?), tshirt=(?),short=(?),bedsheet=(?),other=(?) where Id =(?)";
    connection.query(queryy,[shirt,pant,tshirt,short,bedsheet,other,Id],(err,rows,fields)=>{
        if(!err)
        res.send('Update success.');
        else {
            console.log(err);
            res.end();
        }

        res.json(rows);

    })

})


app.post("/insert",(req,res)=>{
    var Name = req.body.Name;
    var Username = req.body.Username;
    var Password = req.body.Password;
    var Address = req.body.Address;
    var Contact = req.body.Contact;
    var queryy = 'INSERT into regis (Name,Username,Password,Address,Contact) values ("'+Name+'","'+Username+'","'+Password+'","'+Address+'","'+Contact+'")';
    connection.query(queryy,(err,rows,fields)=>{
        if(err)
           {
               res.json({
                   status:400,
                   success:false
                   
               })
           } 
            else{
                res.json({
                    status:200,
                    success:true
                 
                });
            }
            
        
       
    })
})

app.post("/ainsert",(req,res)=>{
    var Name = req.body.Name;
    var Username = req.body.Username;
    var Password = req.body.Password;
    var Contact = req.body.Contact;
    var queryy = 'INSERT into aregis (Name,Username,Password,Contact) values ("'+Name+'","'+Username+'","'+Password+'","'+Contact+'")';
    connection.query(queryy,(err,rows,fields)=>{
        if(err)
        {
            res.json({
                status:400,
                success:false
            })
        } 
         else{
             res.json({
                 status:200,
                 success:true
             });
         }
            
        
      
    })
})

app.post("/login",(req,res)=>{
    var user=req.body.Username;
    var pass=req.body.Password;
    var queryy='SELECT * from aregis where Username="'+user+'"';

      connection.query(queryy,(err,result)=>{
        if(err)
        console.log(err)
        // res.send('Insert success.');
        else{
            console.log(result);
         if(result.length==0)
         {
             res.json({
                 status:404,
                 success:false
             })
         }
         else if( result.length==1)
         {
             if(result[0].Password==pass)
             {
            res.json({
                status:200,
                success:true
            })
        }
        else{
            res.json({
                status:400,
                success:false
            })
        }
        }
        else{
            res.json({
                status:400,
                success:false
            })
        }
        }
})

    }
    )

    app.post("/ulogin",(req,res)=>{
        var user=req.body.Username;
        var pass=req.body.Password;
        console.log(user,"%%%&^%T%&&",pass);
        var queryy='SELECT * from regis where Username="'+user+'"';
    
        connection.query(queryy,(err,result)=>{
            if(err)
            console.log(err)
            // res.send('Insert success.');
            else{
                console.log(result);
             if(result.length==0)
             {
                 res.json({
                     status:404,
                     success:false
                 })
             }
             else if( result.length==1)
             {
                 if(result[0].Password==pass)
                 {
                res.json({
                    status:200,
                    success:true
                })
            }
            else{
                res.json({
                    status:400,
                    success:false
                })
            }
            }
            else{
                res.json({
                    status:400,
                    success:false
                })
            }
            }
    })
    
        }
        )

app.post("/data",(req,res)=>{
    var Id = req.body.Id;
    var shirt = req.body.shirt;
    var pant = req.body.pant;
    var tshirt = req.body.tshirt;
    var short = req.body.short;
    var bedsheet = req.body.bedsheet;
    var other = req.body.other;
    console.log(shirt)
    var queryy = 'INSERT into data (Id,shirt,pant,tshirt,short,bedsheet,other) values ("'+Id+'","'+shirt+'","'+pant+'","'+tshirt+'","'+short+'","'+bedsheet+'","'+other+'") ';
    connection.query(queryy,(err,rows,fields)=>{
        if(!err)
            res.send('Insert success.');
            else{
                console.log(err);

            }
    })
})



app.get("/",(req,res)=>{
    res.send("live");

})
app.listen(8080,()=>{console.log("the app is listening at port 8080")});