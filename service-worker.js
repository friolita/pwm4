self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		self.skipWaiting();
		/*untuk mengaktifkan segera setelah selesai
		instalasi*/
		//	I'm	a	new	service	worker
		//	TODO	3.4:	Skip	waiting
});


/*pada bagian ini akan mengaktifkan service worker*/
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});

/*pada bagian ini akan membaca mengambil data untuk service worker*/
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});