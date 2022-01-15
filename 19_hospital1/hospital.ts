interface IPaciente {
    getId(): string;
    addMedico(medico: IMedico): void;
    removeMedico(idMedico: string): void;
    getMedicos(): Map<string, IMedico>;
    getDiagnostico(): string;
}

interface IMedico {
    getId(): string;
    addPaciente(paciente: IPaciente): void;
    removePaciente(idPaciente: string): void;
    getPacientes():Map<string, IPaciente>;
    getArea(): string;
}

class Medico implements IMedico{
    nome: string;
    area: string;
    pacientes: Map<string, IPaciente>

    constructor(nome: string, area: string){
        this.nome = nome;
        this.area = area;
        this.pacientes = new Map<string, IPaciente>();
    }

    public getId(): string{
        return this.nome;
    }

    public addPaciente(paciente: IPaciente): void{
        if (this.pacientes.has(paciente.getId()))
            return;
        this.pacientes.set(paciente.getId(), paciente);
        paciente.addMedico(this);
    }
    public removePaciente(key: string): void {
        let paciente: undefined | IPaciente = this.pacientes.get(key);
        if (paciente !== undefined) {
            this.pacientes.delete(key);
            paciente.removeMedico(this.nome);
        }
    }
    public getPacientes(): Map<string, IPaciente> {
        return this.pacientes;
    }
    public getArea(): string {
        return this.area;
    }

    public toString(): string{
        let keys = this.pacientes.keys();
        return this.nome + ":" + this.area + " Pacientes: [" + [...keys].join(", ") + "]";
    }
}

class Paciente implements IPaciente{
    protected nome: string;
    protected diagnostico: string;
    protected medicos: Map<string, IMedico> 

    constructor(nome: string, diagnostico: string){
        this.nome = nome;
        this.diagnostico = diagnostico;
        this.medicos = new Map<string, IMedico>();
    }

    public getId(): string {
        return this.nome;
    }
    public addMedico(medico: IMedico): void {
        if (this.medicos.has(medico.getId()))
            return;
        this.medicos.set(medico.getId(), medico);
        medico.addPaciente(this);
    }
    public removeMedico(key: string): void {
        let medico: undefined | IMedico = this.medicos.get(key);
        if (medico !== undefined) {
            this.medicos.delete(key);
            medico.removePaciente(this.nome);
        }
    }
    public getMedicos(): Map<string, IMedico> {
        return this.medicos;
    }
    public getDiagnostico(): string {
        return this.diagnostico;
    }

    public toString(): string{
        let keys = this.medicos.keys();
        return this.nome + ":" + this.diagnostico + " Medicos: [" + [...keys].join(", ") + "]"; 
    }
}

class Hospital{
    private pacientes: Map<string, IPaciente> = new Map();
    private medicos: Map<string, IMedico> = new Map();

    constructor(){}

    public getPaciente(nome: string): IPaciente {
        let paciente: undefined | IPaciente = this.pacientes.get(nome);
        if (paciente === undefined)
            throw new Error("Paciente não encontrado");
        return paciente;
    }

    public getMedicos(nome: string): IMedico {
        let medico: undefined | IMedico = this.medicos.get(nome);
        if (medico === undefined)
            throw new Error("Medico não encontrado");
        return medico;
    }

    public removePaciente(nome: string): void{
        let paciente = this.getPaciente(nome);
        for (let medi of paciente.getMedicos()) {
            paciente.removeMedico(medi);
        }
        this.pacientes.delete(nome);
    }
    public removeMedico(nome: string): void{
        let medico = this.getMedicos(nome);
        for (let pac of medico.getPacientes()) {
            medico.removePaciente(pac);
        }
        this.medicos.delete(nome);
    }
    public addPaciente(paciente: IPaciente): void{
        if (this.pacientes.has(paciente.getId()))
            return;
        this.pacientes.set(paciente.getId(), paciente);
    }
    public addMedico(medico: IMedico): void{
        if (this.medicos.has(medico.getId()))
            return;
        this.medicos.set(medico.getId(), medico);
    }
    public vincular(nomeMedico: string, nomePaciente: string): void{
        let paciente = this.getPaciente(nomePaciente);
        let medico = this.getMedicos(nomeMedico);
        paciente.addMedico(medico);
    }
    public toString(): string{
        let pacientes = [...this.pacientes.values()].map(a => a.toString());
        let medicos = [...this.medicos.values()].map(d => d.toString());
        return "Pacientes:\n" + pacientes.join("\n") + "\n Medicos:\n" + medicos.join("\n");
    }
}

let hospital = new Hospital();

let eme = new Paciente("Eme", "queimadura");
let gabriela = new Paciente("Gabriela", "facada");
let ana = new Medico("Ana", "geral");
let ant = new Medico("Antonio", "dermatologista");

hospital.addPaciente(eme);
hospital.addPaciente(gabriela);
hospital.addMedico(ana);
hospital.addMedico(ant);
hospital.vincular("ana", "gabriela");
hospital.vincular("Antonio", "Eme");

console.log("" + hospital);