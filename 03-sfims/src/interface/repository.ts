
export interface Repository {
    create(user: any);
    findOne(id: any);
    existsById(id: any);
}