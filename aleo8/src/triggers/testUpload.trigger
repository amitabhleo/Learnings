trigger testUpload on Contact (before insert) {
	for(Contact c:Trigger.new){
	c.description = 'new comment from trigger';
	//added a description now
	}
    
}