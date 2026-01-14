import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './objects/tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';

export const tblPubLocalFindUniqueSchema: z.ZodType<Prisma.tblPubLocalFindUniqueArgs> = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubLocalFindUniqueArgs>;

export const tblPubLocalFindUniqueZodSchema = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema }).strict();