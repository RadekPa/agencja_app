import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';

export const tblPersonLoginFindUniqueSchema: z.ZodType<Prisma.tblPersonLoginFindUniqueArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginFindUniqueArgs>;

export const tblPersonLoginFindUniqueZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict();