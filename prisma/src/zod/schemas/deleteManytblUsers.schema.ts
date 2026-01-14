import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './objects/tblUsersWhereInput.schema';

export const tblUsersDeleteManySchema: z.ZodType<Prisma.tblUsersDeleteManyArgs> = z.object({ where: tblUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUsersDeleteManyArgs>;

export const tblUsersDeleteManyZodSchema = z.object({ where: tblUsersWhereInputObjectSchema.optional() }).strict();