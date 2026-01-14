import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesSelectObjectSchema as tblCustTypesSelectObjectSchema } from './objects/tblCustTypesSelect.schema';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';

export const tblCustTypesFindUniqueSchema: z.ZodType<Prisma.tblCustTypesFindUniqueArgs> = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), where: tblCustTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustTypesFindUniqueArgs>;

export const tblCustTypesFindUniqueZodSchema = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), where: tblCustTypesWhereUniqueInputObjectSchema }).strict();