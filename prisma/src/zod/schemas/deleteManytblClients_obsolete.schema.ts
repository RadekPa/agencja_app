import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './objects/tblClients_obsoleteWhereInput.schema';

export const tblClients_obsoleteDeleteManySchema: z.ZodType<Prisma.tblClients_obsoleteDeleteManyArgs> = z.object({ where: tblClients_obsoleteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblClients_obsoleteDeleteManyArgs>;

export const tblClients_obsoleteDeleteManyZodSchema = z.object({ where: tblClients_obsoleteWhereInputObjectSchema.optional() }).strict();