function LaunchApp()
{
  TestedApps.Microsoft_To_Do.Run(1,true);
  aqUtils.Delay(3000);

}

//Adding new list

function AddNewlist(Task)
{
  
  let windows_UI_Core_CoreWindow = Aliases.Microsoft_Todos.Microsoft_To_Do;
  let namedContainerAutomationPeer = windows_UI_Core_CoreWindow.PaneRoot.Sidebar;
  let button = namedContainerAutomationPeer.Sidebar.New_list;  
  var list = "New list";
  var text = OCR.Recognize(button.New_list).FullText;
 if( aqObject.CheckProperty(button.New_list, "Text", cmpEqual, "New list"))
 {  
  button.Click();
  aqUtils.Delay(2000);
  windows_UI_Core_CoreWindow.Keys(Task);
   aqUtils.Delay(3000);
  namedContainerAutomationPeer.Click();
  }else{
   Log.Error("newlist is not present")
    Aliases.ApplicationFrameHost.wndApplicationFrameWindow.Close();  
  }
}

//Adding new Task
function AddTask()
{
 let microsoft_Todos = Aliases.Microsoft_Todos;
  let windows_UI_Core_CoreWindow = microsoft_Todos.Microsoft_To_Do;
  let namedContainerAutomationPeer = windows_UI_Core_CoreWindow.PaneRoot.Sidebar.Sidebar.Lists.Team_Review_more_options_available.Team_Review_more_options_available;
  aqObject.CheckProperty(namedContainerAutomationPeer.Team_Review, "Text", cmpEqual, "Team Review");
  namedContainerAutomationPeer.Click();
  let wnd = windows_UI_Core_CoreWindow.DetailAndTaskSplitView;
  let textBox = wnd.Add_a_task_in_Team_Review_;
  textBox.ContentElement.Click();
  textBox.Keys("tester");
  wnd.K.Click(1, 5);
  wnd.Tasks.Task_tester_more_options_available.Task_tester_more_options_available.Click();
  namedContainerAutomationPeer = wnd.PaneRoot.Details_for_task_Tester;
  let scrollViewer = namedContainerAutomationPeer.ScrollViewer;
  scrollViewer.Add_a_reminder.Click();
  let wndXaml_WindowedPopupClass = microsoft_Todos.wndXaml_WindowedPopupClass;
  wndXaml_WindowedPopupClass.Click();
  scrollViewer.Add_due_date.Click();
  wndXaml_WindowedPopupClass.Click();
  let button = scrollViewer.Assign_to;
  button.Click();
  aqUtils.Delay(2000);
  let scrollViewer2 = windows_UI_Core_CoreWindow.Pop_up_2.ContentScrollViewer;
  scrollViewer2.Create_invitation_link.Click();
  scrollViewer2.List_members.Dinesh_B_Owner_.Click();
  aqUtils.Delay(2000); 
  // aqObject.CheckProperty(button.Assign_to, "Text", cmpEqual, "Dinesh B");
//  aqObject.CheckProperty(button.Assign_to, "ObjectIdentifier", cmpEqual, "Dinesh_B");
  scrollViewer.Add_file.Click();
  let dlgOpen = Aliases.PickerHost.dlgOpen;
  dlgOpen.DUIViewWndClassName.Explorer_Pane.CtrlNotifySink.ShellView.Items_View.Capture.Click();
  dlgOpen.btnOpen.ClickButton();
  aqUtils.Delay(2000);
  textBox = scrollViewer.Add_note;
  OCR.Recognize(textBox.ContentElement).BlockByText("note").Click();
  textBox.Keys("Tester");
  namedContainerAutomationPeer.Dismiss_detail_view.Click();
}

function Complete()
{
  let microsoft_Todos = Aliases.Microsoft_Todos;
  let windows_UI_Core_CoreWindow = microsoft_Todos.Microsoft_To_Do;
  let listView = windows_UI_Core_CoreWindow.DetailAndTaskSplitView.Tasks;
  listView.Task_tester_Due_17_August_2020_You_have_a_reminder_set_for_17_August_2020_9_00_To_access_the_notes_attached_to_the_task_go_to_details_Files_attached_Assigned_to_Dinesh_B_more_options_available.Task_tester_Due_17_August_2020_You_have_a_reminder_set_for_17_August_2020_9_00_To_access_the_notes_attached_to_the_task_go_to_details_Files_attached_Assigned_to_Dinesh_B_more_options_available.Incomplete_task.Click();
  aqObject.CheckProperty(listView.Collapse_Completed_bucket.Collapse_Completed_bucket.Collapse_Completed_bucket.Completed, "Text", cmpEqual, "Completed");
  listView.Completed_task_tester_Due_17_August_2020_To_access_the_notes_attached_to_the_task_go_to_details_Files_attached_Assigned_to_Dinesh_B_more_options_available.Completed_task_tester_Due_17_August_2020_To_access_the_notes_attached_to_the_task_go_to_details_Files_attached_Assigned_to_Dinesh_B_more_options_available.ClickR(394, 43);
  // OCR.Recognize(microsoft_Todos.wndXaml_WindowedPopupClass).BlockByText("task", spBottomMost).Click();
 // windows_UI_Core_CoreWindow.Pop_up_2.ContentScrollViewer.Delete.Click();
  Aliases.ApplicationFrameHost.wndApplicationFrameWindow.Close();
}