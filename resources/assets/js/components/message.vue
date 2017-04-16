<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Message</div>

                    <div class="panel-body">
                        <form accept="#" @submit.prevent="send">
                            <div class="form-group">
                                <label for="users">Choose users</label>
                                <input type="text" name="users" id="users" class="form-control">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { userautocomplete } from '../helpers/autocomplete.js'

    export default {
        methods : {
            send () {
                console.log('obj');
            }
        },
        mounted() {
            userautocomplete('#users', {
                hitsPerPage: 2
            })
        }
    }
</script>
