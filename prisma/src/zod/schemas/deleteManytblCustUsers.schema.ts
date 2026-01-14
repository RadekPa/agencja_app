import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './objects/tblCustUsersWhereInput.schema';

export const tblCustUsersDeleteManySchema: z.ZodType<Prisma.tblCustUsersDeleteManyArgs> = z.object({ where: tblCustUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblCustUsersDeleteManyArgs>;

export const tblCustUsersDeleteManyZodSchema = z.object({ where: tblCustUsersWhereInputObjectSchema.optional() }).strict();