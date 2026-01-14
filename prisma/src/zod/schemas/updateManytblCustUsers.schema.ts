import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersUpdateManyMutationInputObjectSchema as tblCustUsersUpdateManyMutationInputObjectSchema } from './objects/tblCustUsersUpdateManyMutationInput.schema';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './objects/tblCustUsersWhereInput.schema';

export const tblCustUsersUpdateManySchema: z.ZodType<Prisma.tblCustUsersUpdateManyArgs> = z.object({ data: tblCustUsersUpdateManyMutationInputObjectSchema, where: tblCustUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustUsersUpdateManyArgs>;

export const tblCustUsersUpdateManyZodSchema = z.object({ data: tblCustUsersUpdateManyMutationInputObjectSchema, where: tblCustUsersWhereInputObjectSchema.optional() }).strict();