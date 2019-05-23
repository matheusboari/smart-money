<template>
    <div class="indices-header-wrapper">
        <primary-header tab="indices" />
        <div class="indices-chart-wrapper">
            <div class="indices-wrapper">
                <div class="indices">
                   <h3 class="title">Índices</h3>
                   <div class="indice">
                       <div class="name">CDI</div>
                       <div class="tax">
                           <div class="title">Taxa atual</div>
                           <div class="value">6,40%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">SELIC</div>
                       <div class="tax">
                           <div class="title">Taxa atual</div>
                           <div class="value">6,40%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">IGPDI</div>
                       <div class="tax">
                           <div class="title">Taxa atual</div>
                           <div class="value">6,40%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">IGPM</div>
                       <div class="tax">
                           <div class="title">Taxa atual</div>
                           <div class="value">6,40%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">IPCA</div>
                       <div class="tax">
                           <div class="title">Taxa atual</div>
                           <div class="value">6,40%</div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="chart-wrapper">

            </div>
        </div>
    </div>
</template>

<script>
import primaryHeader from '../../components/primaryHeader.vue'

export default {
    components: {
        primaryHeader
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.indices-chart-wrapper {
    max-width: 1050px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: $defaultFont;
    >.indices-wrapper {
        flex: 1 1 100%;
        >.indices {
            padding: 20px;
            background: white;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            border-radius: 4px;
            >.title {
                margin-bottom: 10px;
            }
            >.indice {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                justify-content: space-between;
                padding: 5px;
                >.tax {
                    text-align: center;
                    >.value { font-weight: bold; }
                }
                &:hover {
                    background: $gray-300;
                }
            }
        }
    }
}
</style>
