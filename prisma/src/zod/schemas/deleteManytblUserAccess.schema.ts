import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessWhereInputObjectSchema as tblUserAccessWhereInputObjectSchema } from './objects/tblUserAccessWhereInput.schema';

export const tblUserAccessDeleteManySchema: z.ZodType<Prisma.tblUserAccessDeleteManyArgs> = z.object({ where: tblUserAccessWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUserAccessDeleteManyArgs>;

export const tblUserAccessDeleteManyZodSchema = z.object({ where: tblUserAccessWhereInputObjectSchema.optional() }).strict();