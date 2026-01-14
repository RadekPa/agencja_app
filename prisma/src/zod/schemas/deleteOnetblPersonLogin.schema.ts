import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';

export const tblPersonLoginDeleteOneSchema: z.ZodType<Prisma.tblPersonLoginDeleteArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginDeleteArgs>;

export const tblPersonLoginDeleteOneZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict();