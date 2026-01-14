import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './objects/tblPublishersWhereInput.schema';

export const tblPublishersDeleteManySchema: z.ZodType<Prisma.tblPublishersDeleteManyArgs> = z.object({ where: tblPublishersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPublishersDeleteManyArgs>;

export const tblPublishersDeleteManyZodSchema = z.object({ where: tblPublishersWhereInputObjectSchema.optional() }).strict();