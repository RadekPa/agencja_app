import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './objects/tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsCreateInputObjectSchema as tblAuthorsCreateInputObjectSchema } from './objects/tblAuthorsCreateInput.schema';
import { tblAuthorsUncheckedCreateInputObjectSchema as tblAuthorsUncheckedCreateInputObjectSchema } from './objects/tblAuthorsUncheckedCreateInput.schema';

export const tblAuthorsCreateOneSchema: z.ZodType<Prisma.tblAuthorsCreateArgs> = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), data: z.union([tblAuthorsCreateInputObjectSchema, tblAuthorsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblAuthorsCreateArgs>;

export const tblAuthorsCreateOneZodSchema = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), data: z.union([tblAuthorsCreateInputObjectSchema, tblAuthorsUncheckedCreateInputObjectSchema]) }).strict();