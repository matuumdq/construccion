const Sponsors = () => {
	const marcas = [
		"https://th.bing.com/th/id/R.44df4def9c1194ce4cbdf4c4dab170df?rik=v8ubmREWX68Nrg&riu=http%3a%2f%2fcompras.amuc.org.ar%2fimg%2flogo_corralon_comahue.jpg&ehk=yHwM6%2fOadsrWeRi0lY4BO%2f2yZL94kZUPSCEl8Vq607g%3d&risl=&pid=ImgRaw&r=0",
		"https://th.bing.com/th/id/OIP.PY3fKDrIL6VJGpFwUdKkxQHaBr?pid=ImgDet&rs=1",
		"https://i1.wp.com/corralonhuechulafquen.com.ar/wp-content/uploads/2020/05/fv.png?fit=225%2C225&ssl=1",
		"https://t3.ftcdn.net/jpg/04/50/98/26/360_F_450982687_WR7OVSN7YSjCQFIi08FVZ8yxyuLk4VJV.jpg",
		"https://www.dapesa.com.mx/wp-content/uploads/2014/06/logos-tubo.jpg",
		"https://pro2-bar-s3-cdn-cf4.myportfolio.com/5c78dc7afc5f4a6cf6e599b52c460b40/51f0e2cb-3a2c-4e0a-ae90-c72f986a43ed_rw_600.png?h=ae3e5d03d28858c75ef8c95f0d51d9fd",
	];
	return (
		<div className="min-h-[15vh] my-5 grid gap-4 grid-cols-2 md:grid-cols-6 content-center max-w-screen-lg items-center mx-auto">
			{marcas.map((marca, index) => (
				<div key={index}>
					<img src={marca} alt="" className="max-w-[" />
				</div>
			))}
		</div>
	);
};

export default Sponsors;
