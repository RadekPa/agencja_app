import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersUpdateManyMutationInputObjectSchema as tblUsersUpdateManyMutationInputObjectSchema } from './objects/tblUsersUpdateManyMutationInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './objects/tblUsersWhereInput.schema';

export const tblUsersUpdateManySchema: z.ZodType<Prisma.tblUsersUpdateManyArgs> = z.object({ data: tblUsersUpdateManyMutationInputObjectSchema, where: tblUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUsersUpdateManyArgs>;

export const tblUsersUpdateManyZodSchema = z.object({ data: tblUsersUpdateManyMutationInputObjectSchema, where: tblUsersWhereInputObjectSchema.optional() }).strict();