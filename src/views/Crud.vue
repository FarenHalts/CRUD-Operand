<template>
<div class="about">
    <img src="../assets/operandLogo.png" />
    <el-row :gutter="20" class="boxCrud">
        <el-form :model="ruleForm" :label-position="'top'" :rules="rules" ref="ruleForm" class="demo-ruleForm crudForm box">
            <el-col :span="12">
                <el-form-item label="Nome" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Email" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="CEP" prop="cep">
                    <el-input v-model="ruleForm.cep"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Endereço" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item label="Número" prop="adressnumber">
                    <el-input v-model="ruleForm.adressnumber"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="CPF" prop="cpf">
                    <el-input v-model="ruleForm.cpf"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="Data de Nascimento" required>
                    <el-form-item prop="birthDate">
                        <el-date-picker type="date" placeholder="Selecione uma data" v-model="ruleForm.birthDate" style="width: 100%;" format="dd/MM/yyyy" value-format="dd/MM/yyyy"></el-date-picker>
                    </el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="Profissão" prop="occupation">
                    <el-input v-model="ruleForm.occupation"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24" style="text-align: right;">
                <el-button type="secondary" @click="reset()">Limpar</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">Salvar</el-button>
            </el-col>
        </el-form>
    </el-row>

    <div style="position: relative; margin-top: 50px;">
        <img class="handStyle" src="../assets/mao_trial.png" />
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="Nome" width="350">
            </el-table-column>
            <el-table-column prop="email" label="Email" width="220">
            </el-table-column>
            <el-table-column prop="cpf" label="CPF" width="150">
            </el-table-column>
            <el-table-column prop="birthDate" label="Data de Nascimento" width="170">
            </el-table-column>
            <el-table-column prop="cep" label="CEP" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Endereço" width="210">
            </el-table-column>
            <el-table-column prop="adressnumber" label="Número" width="120">
            </el-table-column>
            <el-table-column prop="occupation" label="Profissão" width="250">
            </el-table-column>
            <el-table-column width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="editUser(scope.$index, scope.row)">Editar</el-button>
                    <el-button size="mini" type="danger" @click="modalConfirm(scope.$index, scope.row)">Remover</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                    name: 'Lucas Garcia',
                    email: 'lucas.garcia@operand.com',
                    cpf: '633.342.241-35',
                    birthDate: '13/12/1999',
                    cep: '81880-204',
                    address: 'Rua Tentente Galvão',
                    adressnumber: '9005',
                    occupation: 'Desenvolvedor Front-End',
                },
                {
                    name: 'Chester Bennington',
                    email: 'chester@linkinpark.com',
                    cpf: '572.338.170-90',
                    birthDate: '20/03/1976',
                    cep: '81870-355',
                    address: 'Avenida Lincoln Park',
                    adressnumber: '20',
                    occupation: 'Vocalista',
                },
                {
                    name: 'Farenhalts Garcia',
                    email: 'farenhalts@boatosdebar.com',
                    cpf: '334.634.734-68',
                    birthDate: '21/06/2005',
                    cep: '81650-420',
                    address: 'Rua Simao Bolivar',
                    adressnumber: '134',
                    occupation: 'Diretor de Podcast',
                }
            ],
            ruleForm: {
                name: '',
                email: '',
                cpf: '',
                birthDate: '',
                cep: '',
                address: '',
                adressnumber: '',
                occupation: ''
            },
            rules: {
                name: [{
                    required: true,
                    message: 'Insira um Nome',
                    trigger: 'change'
                }],
                email: [{
                    required: true,
                    message: 'Insira um Email',
                    trigger: 'change'
                }],
                cpf: [{
                        required: true,
                        message: 'Insira um CPF',
                        trigger: 'change'
                    },
                    {
                        min: 11,
                        message: 'CPF Inválido',
                        trigger: 'blur'
                    }
                ],
                birthDate: [{
                    required: true,
                    message: 'Insira uma Data',
                    trigger: 'change'
                }],
                cep: [{
                        required: true,
                        message: 'Insira um CEP',
                        trigger: 'change'
                    },
                    {
                        min: 8,
                        message: 'CEP Inválido',
                        trigger: 'blur'
                    }
                ],
                address: [{
                    required: true,
                    message: 'Insira um Endereço',
                    trigger: 'change'
                }],
                adressnumber: [{
                    required: true,
                    message: 'Insira o Número do endereço',
                    trigger: 'change'
                }],
                occupation: [{
                    required: true,
                    message: 'Insira uma Profissão',
                    trigger: 'change'
                }]
            },
            edit: false
        }
    },
    methods: {
        modalConfirm(index, data) {
            const name = data.name;
            this.$confirm('Tem certeza que deseja excluir ' + name + '?', 'Remover Usuário', {
                confirmButtonText: 'Remover',
                cancelButtonText: 'Cancelar'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Usuário removido com sucesso!'
                });
                this.deleteUser(index);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Remoção cancelada!'
                });
            });
        },

        deleteUser(index) {
            this.tableData.splice(index, 1)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.addUser()
                }
            });
        },
        addUser() {
            let user = {
                name: this.ruleForm.name,
                email: this.ruleForm.email,
                cpf: this.ruleForm.cpf,
                birthDate: this.ruleForm.birthDate,
                cep: this.ruleForm.cep,
                address: this.ruleForm.address,
                adressnumber: this.ruleForm.adressnumber,
                occupation: this.ruleForm.occupation
            }
            if (this.edit == true) {
                this.tableData.splice(this.editIndex, 1, user)
                this.edit = false;
                this.editIndex = '';
            } else {
                this.tableData.push(user)
            }
            this.reset();
        },
        editUser(index, data) {
            this.edit = true;
            this.editIndex = index;
            this.ruleForm.name = data.name,
                this.ruleForm.email = data.email,
                this.ruleForm.cpf = data.cpf,
                this.ruleForm.birthDate = data.birthDate,
                this.ruleForm.cep = data.cep,
                this.ruleForm.address = data.address,
                this.ruleForm.adressnumber = data.adressnumber,
                this.ruleForm.occupation = data.occupation
        },
        reset() {
            this.$refs['ruleForm'].resetFields();
            this.ruleForm.cpf = '';
            this.ruleForm.cep = '';
        }
    }
}
</script>
