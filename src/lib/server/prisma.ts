import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

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

export async function getUserById(id: string) {
	return prismaClient.user.findFirst({
		where: {
			id
		}
	});
}

export async function getExistingUserByGitHubId(githubId: number) {
	return prismaClient.user.findFirst({
		where: {
			github_id: githubId
		}
	});
}
