import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './objects/tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';

export const tblCustomersFindUniqueSchema: z.ZodType<Prisma.tblCustomersFindUniqueArgs> = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustomersFindUniqueArgs>;

export const tblCustomersFindUniqueZodSchema = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema }).strict();