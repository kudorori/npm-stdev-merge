class _stdev {
	constructor(p=false){
		this.p=p;
		this.obj={
			n:0,
			mu:0,
			sd:0
		}
	}
	push(n,mu,sd){
		var old = Object.assign({},this.obj);
		var oldSS = new Number(this._sumOfSquare(old.n,old.mu,old.sd));
		var addSS = new Number(this._sumOfSquare(n,mu,sd));
		
		this.obj.n = new Number(old.n) + new Number(n);
		this.obj.mu = ((old.n*old.mu)+(n*mu))/(this.obj.n);
		this.obj.sd = Math.sqrt(this._variance((oldSS+addSS),this.obj.n,this.obj.mu));
	}
	remove(n,mu,sd){
		var old = Object.assign({},this.obj);
		var oldSS = new Number(this._sumOfSquare(old.n,old.mu,old.sd));
		var delSS = new Number(this._sumOfSquare(n,mu,sd));
		
		this.obj.n = new Number(old.n) - new Number(n);
		this.obj.mu = ((old.n*old.mu)-(n*mu))/(this.obj.n);
		this.obj.sd = Math.sqrt(this._variance((oldSS-delSS),this.obj.n,this.obj.mu));
	}
	_sumOfSquare(n,mu,sd){
		if(n==0){
			return 0;
		}
		return Math.pow(sd,2)*(n-(this.p?0:1))+new Number(n)*Math.pow(mu,2);
	}
	_variance(sum,n,mu){
		return (sum-n*Math.pow(mu,2))/(n-(this.p?0:1));
	}
	get n(){
		return this.obj.n;
	}
	get mu(){
		return this.obj.mu;
	}
	get sd(){
		return this.obj.sd;
	}
}



module.exports= _stdev;