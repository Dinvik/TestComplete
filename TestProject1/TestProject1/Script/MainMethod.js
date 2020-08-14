//USEUNIT  TaskScenario

function MainMethod()
{
  
     const AddList = [ 
                    {Newlist: "Interops scrum"},
                    {Newlist: "Team Review"},
                  ]      
           // Open the application 
             LaunchApp();        
        
        // Adding new task
         for (var i = 0; i < AddList.length; i++) 
         {
         var obj = AddList[i];
         var Task = obj.Newlist;
         AddNewlist(Task); 
         } 
         
         // Add Task
        for (var i = 0; i < AddList.length; i++) 
         {
         var obj = AddList[i];
         var Task = obj.Newlist;
        if(Task == "Team Review"){ 
         AddTask()
          
        }
     }
     
     
    // Completetask();
      Complete();
    
}