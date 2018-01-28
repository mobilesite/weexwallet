<template>
    <div :class="cls">
        
    </div>
</template>
    
<script>    
    export default {
        name: 'Icon',
        props: {
            type: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                default: () => {}
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            cls(){
                const typeClass = `ej-icon--${this.type}`;
                
                return [
                    'ej-icon',
                    typeClass,
                    'ej-icon--md',
                    this.className
                ]
            }
        }
    }
</script>