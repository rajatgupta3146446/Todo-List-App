var statusENUMS=
    {
        ACTIVE: "ACTIVE",
        COMPLETE : "COMPLETE",
        DELETED : "DELETED"
    }


var todo={
    1:{title:"learn a" ,status:statusENUMS.ACTIVE},
    2:{title:"learn b" ,status:statusENUMS.COMPLETE},
    3:{title:"learn c" ,status:statusENUMS.ACTIVE},
    4:{title:"learn d" ,status:statusENUMS.DELETED},
    5:{title:"learn e" ,status:statusENUMS.COMPLETE},


}

var next_todo_id=6;

module.exports={
    statusENUMS:statusENUMS,
    todo:todo,
    next_todo_id:next_todo_id
}