import { prismaClient } from './connections';

export async function createUserFromGitHub(user: {
	id: string;
	email: string;
	github_id: number;
	username: string;
}) {
	return prismaClient.user.create({
		data: {
			id: user.id,
			email: user.email,
			github_id: user.github_id,
			username: user.username
		}
	});
}

export async function deleteUserById(id: string) {
	return prismaClient.user.delete({
		where: {
			id
		}
	});
}

export async function getUserById(id: string) {
	try {
		return await prismaClient.user.findFirst({
			where: {
				id
			}
		});
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getExistingUserByGitHubId(githubId: number) {
	try {
		return await prismaClient.user.findFirst({
			where: {
				github_id: githubId
			}
		});
	} catch (error) {
		console.error(error);
		return null;
	}
}
