exports.getTesting =(req,res)=>{
    const msg='testing working'

    res.json({
        success:1,
        id:req.params.id,
        msg:msg
    })
}

const datas =[]
exports.createTesting = (req,res)=>
{
    if(req.body.name =='' || req.body.name ==null|| req.body.name ==undefined){
        res.json({
            msg:"please enter name"
        })
    }
    else if(req.body.age =='' || req.body.age ==null|| req.body.age ==undefined){
        res.json({
            msg:"please enter age"
        })
    }
    else{
        datas.push({name:req.body.name,age:req.body.age})
        res.json({
            msg :'testing post method',
            result:`${req.body.name}  ${req.body.age}`,
            total:datas
        })
    }
}

exports.searchone= (req,res)=>{

    if(req.body.name =='' || req.body.name ==null|| req.body.name ==undefined){
        res.json({
            msg:"please enter name"
        })
    }
    else{

        let age=''
        for(let i=0;i<datas.length;i++){
            if(datas[i].name == req.body.name){
                age = datas[i].age
                console.log(age)
            }
        }
        res.json({age:age})
    }
}