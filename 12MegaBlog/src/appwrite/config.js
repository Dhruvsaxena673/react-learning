import conf from "../conf/conf";
import { Client, ID, Storage, Query, Databases } from "appwrite";

export class Service {

  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Create Post
  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Update Post
  async updatePost(
    slug,
    { title, content, featuredImage, status }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Delete Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Get Single Post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Get Posts
  async getPosts(
    queries = [Query.equal("status", "active")]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Upload File
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Delete File
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Get File Preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
  }
}

const service = new Service();

export default service;