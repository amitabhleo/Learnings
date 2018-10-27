/*
	creating a trigger which is calling a class of different methods to update
*/
trigger AccountBeforeEventListner on Account (before insert,before update) {
    If(Trigger.isInsert){
        //calling the class from here
        AccountUtil.setDefultValues(Trigger.new);
        AccountUtil.setIndustry(Trigger.new);
    }

}