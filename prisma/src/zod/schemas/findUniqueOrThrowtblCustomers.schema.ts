import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './objects/tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';

export const tblCustomersFindUniqueOrThrowSchema: z.ZodType<Prisma.tblCustomersFindUniqueOrThrowArgs> = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustomersFindUniqueOrThrowArgs>;

export const tblCustomersFindUniqueOrThrowZodSchema = z.object({ select: tblCustomersSelectObjectSchema.optional(), include: tblCustomersIncludeObjectSchema.optional(), where: tblCustomersWhereUniqueInputObjectSchema }).strict();