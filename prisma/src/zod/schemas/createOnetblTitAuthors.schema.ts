import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsSelectObjectSchema as tblTitAuthorsSelectObjectSchema } from './objects/tblTitAuthorsSelect.schema';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './objects/tblTitAuthorsInclude.schema';
import { tblTitAuthorsCreateInputObjectSchema as tblTitAuthorsCreateInputObjectSchema } from './objects/tblTitAuthorsCreateInput.schema';
import { tblTitAuthorsUncheckedCreateInputObjectSchema as tblTitAuthorsUncheckedCreateInputObjectSchema } from './objects/tblTitAuthorsUncheckedCreateInput.schema';

export const tblTitAuthorsCreateOneSchema: z.ZodType<Prisma.tblTitAuthorsCreateArgs> = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), data: z.union([tblTitAuthorsCreateInputObjectSchema, tblTitAuthorsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateArgs>;

export const tblTitAuthorsCreateOneZodSchema = z.object({ select: tblTitAuthorsSelectObjectSchema.optional(), include: tblTitAuthorsIncludeObjectSchema.optional(), data: z.union([tblTitAuthorsCreateInputObjectSchema, tblTitAuthorsUncheckedCreateInputObjectSchema]) }).strict();