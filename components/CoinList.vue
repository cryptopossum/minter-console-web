<script>
    import {pretty} from '~/assets/utils';
    import {getCoinIconUrl} from '~/api/accounts';
    import Loader from '~/components/common/Loader';

    export default {
        components: {
            Loader,
        },
        props: {
            isLoading: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                isFullListActive: false,
            };
        },
        computed: {
            hasCustomCoins() {
                return this.$store.getters.balance.filter((coinItem) => coinItem.coin.symbol !== this.$store.getters.COIN_NAME).length;
            },
            coinList() {
                return this.isFullListActive ? this.$store.getters.balance : this.$store.getters.balance.slice(0, 5);
            },
        },
        methods: {
            pretty,
            getCoinIconUrl,
        },
    };
</script>

<template>
    <section class="panel" v-if="hasCustomCoins">
        <div class="table-wrap">
            <table v-if="coinList.length">
                <thead>
                    <tr class="u-text-nowrap">
                        <th>{{ $td('My Coins', 'wallet.coin-table-name') }}</th>
                        <th width="30%">{{ $td('Balance', 'wallet.coin-table-balance') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="u-text-nowrap" :key="coinItem.coin.id" v-for="coinItem in coinList">
                        <td>
                            <img class="wallet__coin-icon" :src="getCoinIconUrl(coinItem.coin.symbol)" width="28" height="28" alt="" role="presentation">
                            <span class="wallet__coin-name">{{ coinItem.coin.symbol }}</span>
                        </td>
                        <!-- balance -->
                        <td>
                            {{ pretty(coinItem.amount) }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="panel__content panel__section u-text-center" v-else-if="isLoading">
                <Loader :isLoading="true"/>
            </div>
            <div class="panel__content panel__section u-text-center" v-else>No Coins</div>
        </div>
        <div class="panel__section u-text-center" v-if="coinList.length < $store.state.balance.length">
            <button class="button button--ghost-main" @click="isFullListActive = true">{{ $td('Show All Coins', 'wallet.coin-show-all') }}</button>
        </div>
    </section>
</template>

