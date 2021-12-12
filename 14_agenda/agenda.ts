class Fone {
    private id: string;
    private telefone: string;
    
    public constructor( id: string, telefone: string){
        this.id = id;
        this.telefone = telefone;
    }
    
    public toString() {
        return `${this.id}:${this.telefone}`;
    }
    
    public static validate(telefone: string): boolean{
        let valido = "0123456789()-.";
            for (let i = 0; i < telefone.length; i++) {
                if (valido.indexOf(telefone[i]) == -1) {
                  // console.log("erro: telefone inválido.")
                    return false;
                }
            }
            return true;
        }
    
    public getId(){
        return this.id;
    }
    
    public setId(id: string): string{
        return id;
    }
    
    public getTelefone(){
        return this.telefone;
    }
    
    public setTelefone(telefone: string): string{
        return telefone;
    } 
    
    
    public isValid(): boolean{
       if (Fone.validate(this.telefone)){
            console.log("Telefone Invalido"); 
            return true;
       }
        return false;
    }
    
    }
    
    class Contato {
    private fone: Fone;    
    private nome: string;
    private fones: Array<Fone>; 
    
    public constructor(nome: string, fones: Array<Fone>){
        this.nome = nome;
        this.fones = new Array<Fone>();
        for (let fone of fones) {
            this.addFone(fone);
        }
    }

    public getNome() {
        return this.nome;
    }

    public setName(nome: string) {
        this.nome = nome;
    }

    public getFones() {
        return this.fones;
    }

    public setFones(fones: Array<Fone>) {
        for (let i = 0; i < fones.length; i++) {
            this.addFone(fones[i]);
        }
    }

    public toString() {
        return `${this.nome}:${this.fones.join(",")}`;
    }
    
    public addFone(fone: Fone){
    //Se fone for válido, insira no atributo fones
        //Se não, informe o erro
        if (fone.isValid()){
            this.fones.push(fone);
            //console.log(this.fones);
        } else {
        console.log("Não foi possivel adicionar telefone")
    }
    }
    public romoveFone(index: number): void{
    //Se o índice existir no ArrayList, remova o telefone com esse índice
        this.fones.splice(index, 1);  
    }
    
    }

    class Agenda{
        private contatos: Array<Contato>;
        
        constructor () {
            this.contatos = new Array<Contato>();
        }

        private findPosByName(nome: String): number{
            //retorna a posição do contato com esse nome no vetor ou -1 se não existir.
            for(let i =0; i > this.contatos.length; i++){
                if(this.contatos[i].getNome() == nome){
                    return i;
            }
        }   
            return -1;
    }

        public findContato(nome: String): Contato{
           // retorna o objeto contato com esse nome ou null se não existir
           let contato = this.findPosByName(nome);
           if (contato != -1) {
               return this.contatos[contato];
           }else{
               return null;
           }
        }

        public addContato (contato: Contato): void{
            let verifica = this.findContato(contato.getNome());
            if(verifica == null){
                this.contatos.push(contato);
                this.contatos.sort((a, b) => a.getNome().localeCompare(b.getNome()))
            }else {
                verifica.setFones(contato.getFones());
            }
        }

        public rmvContato(contato: Contato): void {
            let findPos = this.findPosByName(contato.getNome());
        if (findPos > -1) {
            this.contatos.splice(findPos, 1);
            this.contatos.sort((a, b) => a.getNome().localeCompare(b.getNome()));
        } console.log("contato excluído");
    }

    public getContato(nome: string): Contato | null {
        let i = this.findPosByName(nome);
        if(i != -1){
            return this.contatos[i];
        } else {
            return null;
        }
    }
    
    public toString(): string {
        return this.contatos.join("\n");
    }
    
    }
    
    let fones = [new Fone("play", "40028922"), new Fone("claro", "9466bc"), new Fone("fixo", "35832500")]
    let emeli = new Contato("Emeli ", fones);
    emeli.addFone(new Fone("tim", "554411"));
    emeli.romoveFone(2);
    
    let fones2 = [new Fone("claro", "40028922"), new Fone("tim", "9466bc"), new Fone("casa", "35832500")]
    let maria = new Contato("Maria ", fones);
    maria.addFone(new Fone("oi", "00471"));
    maria.romoveFone(1);
    let agenda = new Agenda;

    agenda.addContato(emeli);
    agenda.addContato(maria);
    console.log("" + agenda);