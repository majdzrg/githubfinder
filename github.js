class Github {
    constructor() {
       this.client_id = '112fe5ad12311a316fb40';
       this.client_secret ='46abf3ac2eda83ad510319d6ff395db97f99ef69';
       this.repos_count = 5;
       this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}