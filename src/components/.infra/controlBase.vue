<script>
export default {
    inject: ["$getControlValidator", "$getVariableByName"],
    data:function(){
        return {};
    },
    props:{
        editMode: {
            type: Boolean,
            default: true
        },
        schema: {
            type: Object,
            required: true
        },
        width: {
            type:String,
            default:"1-1"
        }
    },
    computed:{
        $validation: {cache: false,
            get: function (){
            var v = this.schema.variable;
            var val = this.$getControlValidator(v);
            return val;
        }
        },
        $errorMessage : function () {
            if (this.$validation && this.$validation.$error && this.schema.variable) {
                for (const valid in this.$validation) {
                    if (!String(this.$validation[valid]).startsWith("$") && this.$validation[valid] === false) {
                        var variable = this.$getVariableByName(this.schema.variable);
                        for (const vali in variable.validations) {
                            var validation = variable.validations[vali];
                            if(validation.enabled){
                                if (validation.type === this.$validation.$params[valid].type) {
                                    return validation.errorMessage ?? "Validation error: " + validation.type;
                                }
                            }
                        }
                    }
                }
            }
            return "";
        },
        $error : function () {
            return (this.$validation ? this.$validation.$error : false);
        },
        $isrequired: function () {
            if (this.$validation) {
                for (const param in this.$validation.$params) {
                    if (this.$validation.$params[param].type === "required") return true;
                }
            }
        }
    }
}
</script>